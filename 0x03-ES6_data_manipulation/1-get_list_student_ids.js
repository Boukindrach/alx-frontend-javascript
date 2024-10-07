export default function getListStudentIds(peremter) {
  if (Array.isArray(peremter)) {
    return peremter.map((obj) => obj.id);
  }
  return [];
}
