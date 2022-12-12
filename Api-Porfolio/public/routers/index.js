"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const certServis = __importStar(require("../services/certificates"));
const proyServis = __importStar(require("../services/protects"));
const skilServis = __importStar(require("../services/skills"));
const routes = express_1.default.Router();
routes.get("/", (_req, res) => {
    console.log("hola desde res");
    res.send(`
  <a href="http://localhost:3000/api/es/certificates">Certificados</a>
  <a href="http://localhost:3000/api/es/proyects">Proyectos</a>
  <a href="http://localhost:3000/api/es/skills">Proyectos</a>
    `);
});
routes.get("/es/certificates", (_req, res) => {
    res.send(certServis.getEntryCert());
});
routes.get("/es/certificates/:id", (req, res) => {
    const certId = certServis.findById(+req.params.id);
    return certId !== null ? res.send(certId) : res.sendStatus(404);
});
routes.get("/es/proyects", (_req, res) => {
    res.send(proyServis.getEntryCert());
});
routes.get("/es/proyects/:id", (req, res) => {
    const certId = proyServis.findById(+req.params.id);
    return certId !== null ? res.send(certId) : res.sendStatus(404);
});
routes.get("/es/skills", (_req, res) => {
    res.send(skilServis.getEntrySkills());
});
routes.get("/es/skills/:id", (req, res) => {
    const certId = skilServis.findById(+req.params.id);
    return certId !== null ? res.send(certId) : res.sendStatus(404);
});
exports.default = routes;
