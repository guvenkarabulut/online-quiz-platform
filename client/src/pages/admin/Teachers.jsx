import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { SeeStudentsModal } from "../../components/modals/SeeStudentsModal";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { useSetTeacherMutation } from "../../features/teachers/teachersApiSlice";
import { useGetUsersMutation } from "../../features/users/usersApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";

export function AdminTeachers() {
  const [setTeacher] = useSetTeacherMutation();

  const setTeacherData = async (e, userId) => {
    e.preventDefault();
    try {
      const response = await setTeacher(userId).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersData();
  }, [])

  const [getUsers] = useGetUsersMutation();

  const getUsersData = async () => {
    try {
      const response = await getUsers().unwrap();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <DefaultLayout props={{ name: "Admin" }}>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Ogretmenler"] }} />
        <Card props={{ name: "Ogretmen Ekle" }}>
          <div className="table-responsive">
            <Table columns={["#", "Isim Soyisim", "Eposta", "Kullanici Adi", "İşlemler"]}>
              {
                users.map((user, index) => {
                  return (
                    <TableRow key={user.id} rows={[index + 1, user.firstname + " " + user.lastname, user.email, user.username]}>
                      <form onSubmit={(e) => setTeacherData(e, user.id)} className="form-group">
                        <button type="submit" className="btn btn-success">
                          Ogretmen Yap
                        </button>
                      </form>
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

