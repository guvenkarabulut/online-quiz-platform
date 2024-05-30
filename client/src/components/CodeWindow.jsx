import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { languageOptions } from "../constants/languageOptions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "../lib/defineTheme";
import useKeyPress from "../hooks/useKeyPress";
import ThemeDropdown from "./ThemeDropdown";
import { useGetSubmissionsByCodeIdMutation } from "../features/submissions/submissionsApiSlice";
import { useParams } from "react-router-dom";

const javascriptDefault = `
# Sonucunuzu sadece puts yazarak en sonda belirtiniz.
# Soruda istenilen girdileri gets.chomp ile alabilirsiniz
# Girilen her input degeri stringtir farkli veri tiplerinde islem yapmak isterseniz donusumler yapabilirsiniz
`;

const CodeWindow = ({ props }) => {
  const { codeId } = useParams();
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const [tests, setTests] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [getSubmissionsByCodeId] = useGetSubmissionsByCodeIdMutation();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await getSubmissionsByCodeId(codeId).unwrap();
      setSubmissions(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleCompile = () => {

    console.log(props.codeInfo.id);
    fetchSubmissions();
    setTests([]);


    submissions.map((submission) => {
      setProcessing(true);
      const formData = {
        language_id: 72,
        source_code: btoa(code),
        stdin: btoa(submission.input),
        expected_output: btoa(submission.expected_output),
      };
      const options = {
        method: "POST",
        url: process.env.REACT_APP_RAPID_API_URL + "/submissions",
        params: { base64_encoded: "true", fields: "*", wait: "true" },
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        },
        data: formData,
      };

      axios
        .request(options)
        .then(function(response) {
          console.log("res.data", response.data.status.id);
          if (response.data.status.id === 3) {
            setTests(prev => [...prev, {
              input: submission.input,
              output: submission.expected_output,
              result: "Başarılı"
            }]
            )
          } else {
            setTests(prev => [...prev, {
              input: submission.input,
              output: submission.expected_output,
              result: "Basarisiz"
            }]
            )
          }
        })

        .catch((err) => {
          let error = err.response ? err.response.data : err;
          setProcessing(false);
          console.log("catch block...", error);
        });

    })
    console.log("tests...", tests);
  };



  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }


  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <div className="flex bg-light p-2">
        <span>Soru:</span>
        <div className="ml-2 text-sm text-gray-500">
          <div dangerouslySetInnerHTML={{ __html: props.codeInfo.question }} />
        </div>
      </div>
      <div className="d-flex">
        <div className="w-75">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>
        <div className="bg-light p-3 w-25">
          <div className="px-4 py-2">
            <label className="text-lg font-semibold">Tema</label>
            <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
          </div>

          <div className="px-4 py-2">
            <button
              className="btn btn-primary"
              onClick={() => { handleCompile() }}
            >
              Calistir
            </button>
          </div>

          <h3>Cevap</h3>
          <div className="bg-secondary p-3 rounded">
            <p><span className="text-white">Output:</span> {
              tests.map((test, index) => (
                <div>
                  <p>Input: {test.input}</p>
                  <p>Output: {test.output}</p>
                  <p>Result: {test.result}</p>
                </div>
              ))
            }</p>

          </div>
        </div>
      </div>
    </>
  );
};
export default CodeWindow;
