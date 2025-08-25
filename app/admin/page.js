import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
export default async function AdminHome(){
  const session = await getServerSession(authOptions);
  return <main style={{padding:16}}>{session ? "Admin Center" : "Unauthorized"}</main>;
}
