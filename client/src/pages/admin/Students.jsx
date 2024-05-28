import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Modal } from "../../components/modals/Modal";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { useGetStudentsMutation, useGetUsersMutation } from "../../features/users/usersApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";


export function AdminStudents() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersData();
  }, [])

  const [getStudents] = useGetStudentsMutation();

  const getUsersData = async () => {
    try {
      const response = await getStudents().unwrap();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout props={{ name: "Admin" }}>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Ogrenciler"] }} />
        <Card props={{ name: "Ogrenciler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Isim Soyisim", "Eposta", "Kullanici Adi", "İşlemler"]}>
              {
                users.map((user, index) => {
                  return (
                    <TableRow key={user.id} rows={[index + 1, user.firstname + " " + user.lastname, user.email, user.username]}>
                      <Modal props={{ title: "Ogrenci Detayi", buttonTitle: "Ogrenciyi Goruntule" }}>
                        {user.firstname + " " + user.lastname}<br />
                        {user.email}<br />
                        {user.username}
                      </Modal>
                    </TableRow>
                  )
                })
              }
            </Table>
          </div>
        </Card>
      </div >
    </DefaultLayout >

  )
}
