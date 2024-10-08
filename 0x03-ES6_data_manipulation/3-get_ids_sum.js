export default function getStudentIdsSum(students) {
  return students.reduce((accpet, c) => accpet + c.id, 0);
}
