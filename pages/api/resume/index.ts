import type { NextApiRequest, NextApiResponse } from "next";
import pdf from "../../../public/assets/Mukul_Dutt_Resume.pdf";
//https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/pages/api/user/%5Bid%5D.ts
export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      //   res.setHeader("content-type", "application/pdf");
      import("../../../public/assets/Mukul_Dutt_Resume.pdf").then((d) => {
        console.log(typeof d.default);
      });
      res.status(200).send(pdf);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
