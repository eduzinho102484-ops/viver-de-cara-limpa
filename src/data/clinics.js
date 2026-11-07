// Lista de clínicas parceiras.
// Intencionalmente vazia: só cadastre clínicas reais, com informações verificadas.
//
// Formato esperado de cada item (futuramente virá da API Java/Spring Boot + PostgreSQL):
// {
//   id: "identificador-unico",
//   name: "Nome da instituição",
//   photoUrl: "https://...",        // foto real da estrutura (opcional)
//   city: "Cidade",
//   state: "UF",
//   address: "Rua, número, bairro",
//   phone: "(11) 0000-0000",
//   services: ["Serviço verificado 1", "Serviço verificado 2"],
//   mapsUrl: "https://maps.google.com/..."  // opcional; se vazio, usa busca pelo endereço
// }
export const clinics = [];
