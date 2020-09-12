import React from "react";
import { gql, useQuery } from "@apollo/client";

const getStudnet = gql`
  query studentlist {
    student {
      id
      name
      age
      email
    }
  }
`;
export default function ListOfStudent() {
  const { loading, error, data } = useQuery(getStudnet);
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error...</h1>;

  const { student } = data;
  return (
    <div>
      <table style={{ margin: "0 auto",padding:'10px', color: "blue" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody style={{padding:'10px'}}>
          {student.map((std) => {
            return (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.age}</td>
                <td>{std.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
