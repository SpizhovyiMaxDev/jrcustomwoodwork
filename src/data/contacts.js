import { v4 as createId } from 'uuid';

export const contacts = [
    {
      icon: "location",
      name: "Loaction",
      text: "BC, Kelowna",
      id:createId(),      
    },
    {
      icon: "phone",
      name: "Phone",
      text: "+1 (250) 215 5399",
      id:createId(),
    },
    {
      icon: "mail",
      name: "Mail",
      text: "jrcustomwoodworkltd@gmail.com",
      id:createId(),
    },
];