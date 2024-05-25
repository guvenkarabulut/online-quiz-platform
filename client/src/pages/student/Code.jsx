import CodeWindow from "../../components/CodeWindow";
import DefaultLayout from "../../layouts/DefaultLayout";

export function StudentCode() {
  return (
    <DefaultLayout props={{ name: "Ogrenci" }}>
      <div className="pcoded-main-container">
        <CodeWindow />
      </div>
    </DefaultLayout>
  );
}
