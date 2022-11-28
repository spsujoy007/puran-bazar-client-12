import React from 'react';

const MyProductsTable = ({product}) => {
    const {name, descripton, picture} = product;
    return (
      <tr>
      <td>
        <img src={picture} alt="" />
      </td>
      <td>{name}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
    </tr>
    );
};

export default MyProductsTable;