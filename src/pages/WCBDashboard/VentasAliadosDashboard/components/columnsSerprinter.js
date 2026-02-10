export const COLUMNS_SERPRINTER = [
  {
    key: "backoffice",
    label: "Backoffice",
  },
  {
    key: "leads",
    label: "Leads",
    align: "text-right",
  },
  {
    key: "ventas",
    label: "Ventas",
    align: "text-right",
  },
  {
    key: "servicios",
    label: "Servicios",
    align: "text-right",
  },
  {
    key: "efectServicios",
    label: "Efect %",
    render: (value) => `${value}%`,
    align: "text-right",
  },
];
