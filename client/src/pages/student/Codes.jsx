import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { TeacherCodeForm } from "../../components/teacher/code/Form";
import { useDeleteCodeMutation, useGetCodeMutation } from "../../features/code/codeApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";

export function StudentCodes() {
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
  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <Card props={{ name: "Soru Olustur" }}>
          <div className="table-responsive">
            <Table columns={["#", "Soru", "İşlemler"]}>
              {
                codes.map((code, index) => {
                  return (
                    <TableRow key={code.id} rows={[index + 1, DOMPurify.sanitize(code.question),]}>
                      <a href={`/student-code/${code.id}`} className="btn btn-primary">
                        Kodu Gör
                      </a>
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
