import deptTrackerRepo from "@/app/repo/dept-tracker-repo";

export async function GET(req) {
  const departments = await deptTrackerRepo.getDepartments();
  return Response.json(departments, { status: 200 });
}

export async function POST(req) {
  const deptartment = await req.json();
  const newDeptartment = await deptTrackerRepo.addDepartment(deptartment);
  return Response.json(newDeptartment, { status: 201 });
}