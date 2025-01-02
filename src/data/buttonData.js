export const buttons = [
  // Other rows
  [
    { label: "OFF", type: "control" },
    { label: "C", type: "control" },
    { label: "%", type: "operator" },
    { label: "/", type: "operator" },
  ],
  [
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "x", type: "operator" },
  ],
  [
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator" },
  ],
  // Grouping sub-rows together
  [
    [
      [
        { label: "1", type: "number" },
        { label: "2", type: "number" },
        { label: "3", type: "number" },
      ],
      [
        { label: "0", type: "number" },
        { label: ".", type: "decimal" },
        { label: "=", type: "equals" },
      ],
    ],
    [{ label: "+", type: "operator" }],
  ],
];
