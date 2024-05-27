import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { TeacherCodeForm } from "../../components/teacher/code/Form";
import { useDeleteCodeMutation, useGetCodeMutation } from "../../features/code/codeApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";

export function TeacherCode() {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    getCodesData();
  }, [])

  const [getCode] = useGetCodeMutation();

  const getCodesData = async () => {
    try {
      const response = await getCode().unwrap();
      setCodes(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [deleteCode] = useDeleteCodeMutation();

  const handleDelete = async (id) => {
    try {
      await deleteCode(id);
      getCodesData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Kod Sorulari"] }} />
        <Card props={{ name: "Soru Olustur" }}>
          <TeacherCodeForm />
        </Card>
        <Card props={{ name: "Soru Olustur" }}>
          <div className="table-responsive">
            <Table columns={["#", "Soru", "Ders", "İşlemler"]}>
              {
                codes.map((code, index) => {
                  return (
                    <TableRow key={code.id} rows={[index + 1, DOMPurify.sanitize(code.question), code.lesson.Name]}>
                      <button type="button" className="btn btn-danger btn-with-icon" onClick={() => handleDelete(code.id)}>
                        <i className="feather icon-trash"></i>
                      </button>
                    </TableRow>
                  )
                })
              }
            </Table>
          </div>
        </Card>
      </div>
    </DefaultLayout>
  )
}
