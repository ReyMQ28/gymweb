

function Table() {
  

  return (
    <div>
      <h1 className="text-center uppercase">Lista de asistencia </h1>
      <br></br>
      <table className=" border-slate-300 border-2 rounded-lg p-3">
        <thead>
          <tr className=" border-slate-300 border-2 rounded-lg p-3">
            <th className=" border-slate-300 border-2 rounded-lg p-3">
              Delete
            </th>
            <th className=" border-slate-300 border-2 rounded-lg p-3">
              Product
            </th>
            <th className=" border-slate-300 border-2 rounded-lg p-3">
              Description
            </th>
            <th className=" border-slate-300 border-2 rounded-lg p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-slate-300 border-2 rounded-lg p-3">
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              Delete
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              The Sliding Mr. Bones
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              Malcolm Lockyer
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3"> 1961</td>
          </tr>
          <tr className=" border-slate-300 border-2 rounded-lg p-3">
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              Delete
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              Witchy Woman
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              The Eagles
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3">1972</td>
          </tr>
          <tr className=" border-slate-300 border-2 rounded-lg p-3">
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              Delete
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              Shining Star
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3">
              Earth, Wind, and Fire
            </td>
            <td className=" border-slate-300 border-2 rounded-lg p-3">1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
