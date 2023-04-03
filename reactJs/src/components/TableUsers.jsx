import { useEffect, useState } from "react";
import ApiSetup from "../services/ApiSetup";

const TableUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const api = ApiSetup();
    async function getUsers () {
      const response = await api.get("/user");

      setUsers(response.data.users);
      console.log(response.data.users);
    }

    getUsers();

  }, []);

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm dark:divide-gray-700">
        <thead>
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
              Id
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
              Nome
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
              Criado
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
              Editado
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {users.map((user) => (
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                {user.id}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-200">
                {user.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-200">
                {user.email}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-200">
                {user.createdAt}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-200">
                {user.updatedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  };

export default TableUsers;