export default function getListStudentIds(parameter) {
  if (Array.isArray(parameter)) {
    return parameter.map((obj) => obj.id);
  }
  return [];
}
