using MantenimientoESAN.Models;
using MantenimientoESAN.Models.dbContext_SISEDUTIVA_PROD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace MantenimientoESAN.Controllers
{
    public class HomeController : Controller
    {
        private SisEdutiva_prodEntities db = new SisEdutiva_prodEntities();

        public ActionResult Index()
        {
            return View();
        }


        //JHONY VISTAS
        public ActionResult PaginaInicio()
        {

            return View();
        }

        public ActionResult Administrador()
        {
            return View();
        }


        //ROGER VISTAS
        public ActionResult PaginaInicio2()
        {

            return View();
        }

        public ActionResult AdministradorModulo3(string buscar)
        {

            return View(buscar);

        }



        public ActionResult ValidarUsuario( string user , string pass)
        {
            string txtUsername = user;
            string txtPassword = pass;

            //CONSUMIR SERVICIO ESAN
            //var seguridad = new SeguridadEsan.Seguridad();
            var seguridad = new SeguridadEsan.Seguridad();
            var usuario = seguridad.ValidarUsuarioXLDAP("esan.edu.pe", txtUsername, txtPassword, "56");
            if (usuario != null && usuario.Id > 0)
            {
                Session["UsuarioAdmin"] = usuario.NombreCompleto;
                return RedirectToAction("PaginaInicio", "Home");
            }
            else
            {



                return RedirectToAction("Index", "Home", new { id = 1 });
                //return null;
                //TempData["ErrorMessage"] = "Usuario o contraseña incorrecta (ponerse en contacto con el Administrador)";
                //return RedirectToAction("Index", "Home");
            }
            
            
        }


        

        //*************************************
        //ZOOMBLE JHONY
        //*************************************
        public JsonResult Listar()
        {
            var datos = db.PromocionZoomdle.ToList();
            return Json(datos, JsonRequestBehavior.AllowGet);

        }

        public ActionResult Insertar(PromocionZoomdle insertar)
        {
         
            if (ModelState.IsValid)
            {
                db.PromocionZoomdle.Add(insertar);
                db.SaveChanges();

                return RedirectToAction("Administrador");
            }
            
            return Json(new { success = false, message = "Error al registrar datos" });
        }



    //*********************************************
    //EDUTIVA ROGER 
    //**********************************************
    [HttpGet]
        public JsonResult BuscarActores()
        {
            var datos = db.SP_CambiarEsPlantaListar().ToList();
            return Json(datos, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public ActionResult ActualizarEsPlanta(int idActor)
        {
            try
            {
                // Buscar el actor por su Id
                var actor = db.SP_CambiarEsPlanta(idActor).FirstOrDefault(a => a.IdActor == idActor);

                if (actor != null)
                {
                    actor.IdActor = 0;
                    db.SaveChanges(); 
                    return Json(new { success = true, message = "Actualización exitosa" });
                }
                else
                {
                    return Json(new { success = false, message = "Error: No se encontró el actor" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Error: " + ex.Message });
            }
        }


        public ActionResult BuscarNombre(string buscar)
        {
            //var resultado = db.SP_BUSCAR_ALUMNO(buscar).FirstOrDefault();

            //ViewBag.idactor = resultado != null ? resultado.IdActor : 0;
            //ViewBag.NombreCompletos = resultado != null ? resultado.NombreCompleto : "";

            //return View("AdministradorModulo3");

            var resultados = db.SP_BUSCAR_ALUMNO(buscar).ToList();

            // Crear listas separadas para almacenar los IdActor y los NombreCompletos
            List<int> idActores = new List<int>();
            List<string> nombresCompletos = new List<string>();

            // Iterar sobre cada resultado y agregar los valores correspondientes a las listas
            foreach (var agregar in resultados)
            {
                idActores.Add(agregar.IdActor);
                nombresCompletos.Add(agregar.NombreCompleto);
            }
           

            // Asignar las listas a las ViewBag
            ViewBag.idactor = idActores;
            ViewBag.NombreCompletos = nombresCompletos;

            return View("AdministradorModulo3");


        }


        public ActionResult BuscarCurso(int idactor)
        {
            int idActor = Convert.ToInt32(idactor);

            // Obtener los cursos para el actor dado
            var curso = db.SP_BUSCAR_CURSO(idActor).ToList();

            // Almacenar los objetos completos de los cursos en ViewBag.NombresCursos
            ViewBag.NombresCursos = curso;

            return View("AdministradorModulo3");
        }
    }
}