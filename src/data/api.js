import { clinics } from "./clinics.js";

// Camada de acesso aos dados. Hoje lê um arquivo local; depois basta trocar
// por: fetch(`${API_URL}/clinics`).then((r) => r.json())
export async function fetchClinics() {
  return clinics;
}
