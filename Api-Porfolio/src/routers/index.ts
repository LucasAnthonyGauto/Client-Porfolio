import express from "express";
import * as servis from "../services/index";

const routes = express.Router();

routes.get("/", (_req, res) => {
  console.log("hola desde res");
  res.send(`
  <a href="http://localhost:3000/api/es/certificates">Certificados</a>
  <a href="http://localhost:3000/api/es/proyects">Proyectos</a>
  <a href="http://localhost:3000/api/es/skills">Proyectos</a>
    `);
});
 console.log(servis);
 
// routes.get("/es/certificates", (_req, res) => {
//   res.send(servis.certificates.getEntryCert());
// });

// routes.get("/es/certificates/:id", (req, res) => {
//   const certId = servis.certificates.findById(+req.params.id);
//   return certId !== null ? res.send(certId) : res.sendStatus(404);
// });

routes.get(":lenguaje/:dir", (req, _res) => {
  const { lenguaje = "es", dir } = req.params;
  if (lenguaje === "es" || null) {
    apiRoutes(dir)
  }
});

const apiRoutes = ( dir: any ) : any=> {
  if ( dir === "" ) {

  } else if ( dir === "" ) {

  } else if ( dir === "" ) {
    
  } else if ( dir === "" ) {
    
  } else if ( dir === "" ) {
    
  }
};


// routes.get("/es/proyects", (_req, res) => {
//   res.send(servis.protects.getEntryCert());
// });

// routes.get("/es/proyects/:id", (req, res) => {
//   const certId = servis.protects.findById(+req.params.id);
//   return certId !== null ? res.send(certId) : res.sendStatus(404);
// });

// routes.get("/es/skills", (_req, res) => {
//   res.send(servis.skills.getEntrySkills());
// });

// routes.get("/es/skills/:id", (req, res) => {
//   const certId = servis.skills.findById(+req.params.id);
//   return certId !== null ? res.send(certId) : res.sendStatus(404);
// });

// routes.get("/es/studies", (_req, res) => {
//   res.send(servis.studies.getEntryExp());
// });

// routes.get("/es/studies/:id", (req, res) => {
//   const certId = servis.studies.findById(+req.params.id);
//   return certId !== null ? res.send(certId) : res.sendStatus(404);
// });

// routes.get("/es/experience", (_req, res) => {
//   res.send(servis.experience.getEntryExp());
// });

// routes.get("/es/experience/:id", (req, res) => {
//   const certId = servis.experience.findById(+req.params.id);
//   return certId !== null ? res.send(certId) : res.sendStatus(404);
// });

export default routes;
