// DeptStudentRepo.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DeptStudentRepo {
  async getDepartments() {
    try {
      return await prisma.department.findMany();
    } catch (error) {
      return error;
    }
  }

  async addDepartment(departmentData) {
    try {
      return await prisma.department.create({ data: departmentData });
    } catch (error) {
      return error;
    }
  }

  async deleteDepartment(id) {
    try {
      return await prisma.department.delete({ where: { id } });
    } catch (error) {
      return error;
    }
  }

  async getDepartmentStudents(deptId) {
    try {
      return await prisma.student.findMany({ where: { deptId } });
    } catch (error) {
      return error;
    }
  }

  async addStudent(studentData) {
    try {
      return await prisma.student.create({ data: studentData });
    } catch (error) {
      return error;
    }
  }

  async updateDepartment(departmentData) {
    try {
      const { id, ...data } = departmentData;
      return await prisma.department.update({ where: { id }, data });
    } catch (error) {
      return error;
    }
  }

  async getStudent(id) {
    try {
      return await prisma.student.findUnique({ where: { id } });
    } catch (error) {
      return error;
    }
  }
}

export default new DeptStudentRepo();
