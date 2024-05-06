import deptTrackerRepo from "@/app/repo/dept-tracker-repo";

export async function GET(request, { params }) {
  const departmentId = params.departmentId;
  const students = await deptTrackerRepo.getDepartments(departmentId);
  return Response.json(students, { status: 200 });
}