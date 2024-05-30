import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeWindow from "../../components/CodeWindow";
import { useGetCodeByIdMutation } from "../../features/code/codeApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";

export function StudentCode() {

  const { codeId } = useParams();

  const [getCodeById] = useGetCodeByIdMutation();
  const [code, setCode] = useState({});
  useEffect(() => {
    fetchCode()
  }, [])

  const fetchCode = async () => {
    try {
      const response = await getCodeById(codeId).unwrap();
      setCode(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout props={{ name: "Ogrenci" }}>
      <div className="pcoded-main-container">
        <CodeWindow props={{ codeInfo: code }} />
      </div>
    </DefaultLayout>
  );
}
