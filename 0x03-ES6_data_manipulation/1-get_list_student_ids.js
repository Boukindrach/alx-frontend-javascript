export default function getListStudentIds(parameters) {
    if (Array.isArray(parameters)) {
      return parameters.map((obj) => obj.id);
    }
    return [];
  }
