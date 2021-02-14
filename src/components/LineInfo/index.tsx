import React from "react";

type Props = {
  label: string,
  value: any
}

const LineInfo = ({ label, value }: Props) => {
  return (
    <p><small>{label}:</small> {value}</p>
  )
}

export default LineInfo 