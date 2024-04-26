import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiData = await axios.post(`${process.env.NEXT_PUBLICATIONS_API}`);
    console.log(apiData);

    //     const publicationsObject = {
    //         Sno: 1,
    //   Name_of_journal: apiData.data.JournalListDetail.JournalName,
    //   Title_of_journal: ,
    //   Author: ,
    //   Vol_no: ,
    //   Iss_No: ,
    //   pg_No: ,
    //   Year: ,
    //   DOI: ,
    //   Department: ,
    //     };

    return NextResponse.json(apiData.data);
  } catch (err) {
    console.log("err", err);
  }
}
