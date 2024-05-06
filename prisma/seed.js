import fs from "fs-extra";
import path from "path";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const departmentsPath = path.join(process.cwd(), "app/data/departments.json");
const studentsPath = path.join(process.cwd(), "app/data/students.json");

async function seed() {
  try {
    const departments = await fs.readJSON(departmentsPath);
    const students = await fs.readJSON(studentsPath);

    // Delete all existing entries in the database
    await prisma.student.deleteMany({});
    await prisma.department.deleteMany({});

    // Seed departments
    for (const department of departments)
      await prisma.department.create({ data: department });

    // Seed students
    for (const student of students)
      await prisma.student.create({ data: student });

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Failed to seed:", error);
  }
}

seed();
