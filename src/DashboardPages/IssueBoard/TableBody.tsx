/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TableRowSingle from "./TableRowSingle";

function TableBody({ project }: any) {
    const { issues } = project;
    return (
        <tbody className="text-center">
            {issues.map((issue: any) => (
                <TableRowSingle issue={issue} key={issue._id} />
            ))}
        </tbody>
    );
}

export default TableBody;
