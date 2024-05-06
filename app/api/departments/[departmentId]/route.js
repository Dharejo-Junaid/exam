import deptTrackerRepo from "@/app/repo/dept-tracker-repo";

export async function DELETE(request, { params }) {
  const departmentId = params.departmentId;
  const response = await deptTrackerRepo.deleteDepartment(departmentId);
  return Response.json(response, { status: 200 });
}

export async function PUT(request, { params, body }) {
  const departmentId = params.departmentId;

  if (!body) {
    return Response.json(
      { error: "Missing department information" },
      { status: 400 }
    );
  }

  try {
    // Update the student information
    const updatedDepartment = await deptTrackerRepo.updateDepartment(body);

    if (!updatedDepartment) {
      return Response.json({ error: "Department not found" }, { status: 404 });
    }

    return Response.json(updatedDepartment, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
