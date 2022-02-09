import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React, { useState } from 'react';
import { Link } from "components";
import { leadService, alertService } from "services";
import Head from "next/head";
import { Tabs, Tab, Table } from 'react-bootstrap';

export default LeadCreator;

function LeadCreator ({ onClickOutside }) {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Por favor coloque su/s nombre/s"),
    lastName: Yup.string().required("Por favor indique su/s apellido/s."),
    age: Yup.string()
      .required("Indique su edad.")
      .min(2, "No puede tener menos de 10 años."),
    email: Yup.string().required(
      "Indique su correo electronico para ser notificado."
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // function handleClickOutside() {
  //   onClickOutside;
  // }
  function onSubmit(lead) {
    return leadService
      .register(lead)
      .then(() => {
        alertService.success("Registro de lead exitoso", {
          keepAfterRouteChange: true,
        });
        onClickOutside;
        router.push("/clientes/panel");
      })
      .catch(alertService.error);
  }
  
  return (<>
    <>
    <Tabs defaultActiveKey="Datos" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Datos" title="Datos">
  <div>Poliza</div>
          <div className="modal-body my-2 bg-grey">
          <div >
          <div className="d-flex ">  
  
<div className="form-group  logo-insurance">
                <input
                  name="Dateseg"
                  type="text"
                 placeholder="Número Poliza"
                  className={`form-control `}
                />
              </div>
              <div className="form-group logo-insurance">
                <input
                  name="Dateseg"
                  type="text"
                 placeholder="Número Endoso"
                  className={`form-control `}
                />
              </div>
              <div className="form-group logo-insurance">
                <input
                  name="Dateseg"
                  type="text"
                 placeholder="Prima Emitida"
                  className={`form-control `}
                />
              </div>
              <div className="txt-align-end">     
              <div className="form-group logo-insurance">
                <input
                  name="Result"
                  type="text"
                 placeholder="Código Referencia"
                  className={`form-control `}
                />
              </div>
              


</div>

      </div>   
      <div className="d-flex ">  
  
  <div className="form-group  logo-insurance">
                  <input
                    name="Dateseg"
                    type="text"
                   placeholder="Ramo"
                    className={`form-control `}
                  />
                </div>
                <div className="form-group logo-insurance">
                  <input
                    name="Dateseg"
                    type="text"
                   placeholder="Fecha Inicio Vigencia"
                    className={`form-control `}
                  />
                </div>
                <div className="form-group logo-insurance">
                  <input
                    name="Dateseg"
                    type="text"
                   placeholder="Impuestos"
                    className={`form-control `}
                  />
                </div>
                <div className="txt-align-end">     
                <div className="form-group logo-insurance">
                  <input
                    name="Result"
                    type="text"
                   placeholder="Comisión Broker"
                    className={`form-control `}
                  />
                </div>
                
  
  
  </div>
  
        </div> 
        <div className="d-flex ">  
  
  <div className="form-group  logo-insurance">
                  <input
                    name="Dateseg"
                    type="text"
                   placeholder="Sucursal"
                    className={`form-control `}
                  />
                </div>
                <div className="form-group logo-insurance">
                  <input
                    name="Dateseg"
                    type="text"
                   placeholder="Fecha fin vigencia"
                    className={`form-control `}
                  />
                </div>
                <div className="form-group logo-insurance">
                  <input
                    name="Dateseg"
                    type="text"
                   placeholder="Valor a Pagar"
                    className={`form-control `}
                  />
                </div>
                <div className="txt-align-end">     
                <div className="form-group logo-insurance">
                <button
              disabled={formState.isSubmitting}
              className="btn btn-primary ml-10"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1 " 
             ></span>
              )}
              ARCHIVOS DE POLIZA
            </button>
                </div>
                
  
  
  </div>
  
        </div> 
                  
            </div>
        </div>
  <div className="">
     
        <div className="">Cliente</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-body my-2 bg-grey">
            <div className="d-flex justify-content-around ">
              <div className="form-group ">
                <label>Nombre </label>
                <input
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`
                } placeholder="dato precompletado"
                disabled
                />
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="form-group">
                <label>Apellido</label>
                <input
                  name="lastName"
                  type="text"
                  {...register("lastName")}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  placeholder="dato precompletado"
                disabled
                />
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div className="form-group">
                <label>Correo electronico</label>
                <input
                  name="email"
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="dato precompletado"
                disabled
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group">
                <label>Numero Telefónico</label>
                <input
                  name="number"
                  type="text"
                  {...register("age")}
                  className={`form-control ${errors.number ? "is-invalid" : ""}`}
                  placeholder="dato precompletado"
                disabled
                />
                <div className="invalid-feedback">{errors.number?.message}</div>
              </div> </div>
              <div className="d-flex justify-content-around">
              <div className="form-group">
                <label>Fecha de Nacimiento</label>
                <input
                  name="datebirth"
                  type="text"
                  {...register("date-birth")}
                  className={`form-control ${errors.datebirth ? "is-invalid" : ""}`}
                  placeholder="dato precompletado"
                disabled
                />
                
                <div className="invalid-feedback">{errors.datebirth?.message}</div>
              </div>
            </div>
          </div>
          {  }
          
          {}
          <div>Plan Seleccionado</div>
          <div className="modal-body my-2 bg-grey">
            <div className="d-flex ">
              <div className="form-group txt-align-ct" >
              <label className="logo-insurance">Vumi</label>
                <div className="logo-insurance">
               
                <img className="" src="https://yt3.ggpht.com/ytc/AKedOLTOq1oVLlML2QKe_ktZKSr6lHPVtQC1TLKoJq4Bpg=s900-c-k-c0x00ffffff-no-rj" alt="" />
                </div>
             </div>
             <div className="form-group txt-align-ct pt-auto" >
                <div>
                    <p>Nombre del producto</p>
                    <p>Costo del producto</p>
                    <p>Resumen del producto </p>
                </div>
             
                
             </div>
             <div className="form-group txt-align-ct pt-auto btn-archive " >
              
             <button
              disabled={formState.isSubmitting}
              className="btn btn-primary "
            >
              
              AGREGAR NOTA
            </button>
                
             </div>

            </div>
        </div>
          {}
         
          <div>Forma de Pago Ofrecido</div>
          <div className="modal-body my-2 bg-grey">
          <div className="d-flex justify-content-around">
              <div className="form-group">
              
                <input
                  
                  type="text"
                
                  className={`form-control`}
                  placeholder="Forma de Pago"
                disabled
                />
                
              </div>
              <div className="form-group">
               
                <input
                  
                  type="text"
                 
                  className={`form-control `}
                  placeholder="detalles"
                disabled
                />
               
              </div>


            </div>
            
        </div>
        <div>Emisión</div>
          <div className="modal-body my-2 bg-grey">
          <div >
              <div className="form-group">
              
                <input
                  
                  type="text"
                
                  className={`form-control`}
                  placeholder="Instrucciones de emisión"
                
                />
                
              </div>
              


            </div>
        </div>
        <div>Forma de Pago Aplicable</div>
          <div className="modal-body my-2 bg-grey">
          <div >
           
          <div className="d-flex justify-content-around">
              <div className="form-group">
              
               <p>Forma de Pago</p>
                
              </div>
              <div className="form-group">
               
              <select name="productos" className="select-product archive-select" disabled > 
            <option selected value="0"> Tipo de Archivo </option>
     
       <option value="1">Cedula</option> 
       <option value="2">Papeleta de votacion</option> 
       <option value="3">Informe de Inspección</option> 
   
</select>
               
              </div>


            </div>
            <div className="d-flex justify-content-around">
              <div className="form-group">
              
               <p>Autorización de Débito</p>
                
              </div>
              <div className="form-group">
               
              <input type="button"  value="Descargar" className="archive-select bg-khaki" />
               
              </div>
            

            </div>
        
        
               
            </div>
          
        
        </div>
        
          <div className="d-flex justify-content-center">
            
            <button
              disabled={formState.isSubmitting}
              className="btn btn-primary ml-10"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1 " 
             ></span>
              )}
              DOCUMENTACIÓN INCOMPLETA
            </button>
            
            <button
              disabled={formState.isSubmitting}
              className="btn btn-primary ml-10"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1 " 
             ></span>
              )}
              ENVIAR ASEGURADORA
            </button>
            
            <br></br>
           
            
          </div>
          <div className="d-flex justify-content-center">
          <button onClick={onClickOutside} className="btn btn-link">
              CANCELAR
            </button>
            </div>
        </form>
      </div>
  </Tab>
  <Tab eventKey="Notas" title="Notas">
  <div>      
        

          <div className="modal-body my-2">
            <div className="d-flex justify-content-around ">
            
              <div className="form-group ">
              <label>Notas</label>
              <input
                  size={70}
                  type="text"
                   className={`form-control  notes-area`}
                />
               
              </div>
            </div>
            <div className="txt-align-end">
            <button
              disabled={formState.isSubmitting}
              className="btn btn-primary"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1 justify-content-end"></span>
              )}
              AGREGAR NOTA
            </button>
            </div>
          </div>
          {  }
          <div>Notas ingresadas</div>
         
            <div className="d-flex">
             <div className="notes-n">
            
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptas error in ipsam voluptatum ex eum. Perferendis eaque nisi, a cupiditate natus eveniet exercitationem, nostrum necessitatibus voluptatem voluptate hic. Vitae.</p>
                <div className="note-footer">
                alberto cajas - 10/01/2022 - 10:55
                </div>
             </div>
            
          </div>
          <div className="d-flex">
             <div className="notes-n">
            
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptas error in ipsam voluptatum ex eum. Perferendis eaque nisi, a cupiditate natus eveniet exercitationem, nostrum necessitatibus voluptatem voluptate hic. Vitae.</p>
                <div className="note-footer">
                alberto cajas - 10/01/2022 - 10:55
                </div>
             </div>
            
          </div>
          <div className="d-flex">
             <div className="notes-n">
            
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptas error in ipsam voluptatum ex eum. Perferendis eaque nisi, a cupiditate natus eveniet exercitationem, nostrum necessitatibus voluptatem voluptate hic. Vitae.</p>
                <div className="note-footer">
                alberto cajas - 10/01/2022 - 10:55
                </div>
             </div>
            
          </div>
          
         

          <div className="d-flex justify-content-center">
            <button
              disabled={formState.isSubmitting}
              className="btn btn-primary"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              ENVIAR FORMULARIO
            </button>
            <button onClick={onClickOutside} className="btn btn-link">
              CANCELAR
            </button>
          </div>
       
      </div>
  </Tab>
  <Tab eventKey="Archivos " title="Archivos " >
  <div className="">Archivo Adjunto</div>
  <div className="modal-body my-2">
            
  <div className="d-flex justify-content-around ">  
  <div className="form-group ">
  <input type="button"  value="Seleccionar archivo" className="archive-select" />
           <select name="productos" className="select-product archive-select" > 
            <option selected value="0"> Tipo de Archivo </option>
     
       <option value="1">Cedula</option> 
       <option value="2">Papeleta de votacion</option> 
       <option value="3">Informe de Inspección</option> 
   
</select>
<button
              disabled={formState.isSubmitting}
              className="btn btn-primary left archive-select"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1 justify-content-end"></span>
              )}
              AGREGAR ARCHIVO
            </button>
</div>
</div>

            
            
          </div>
          <div className="d-flex">
             <div className="notes-n">
            <h4>
              Copia de Cedula
            </h4>
          <div className="archive-description">
            copiadecedula132313213.PDF
          </div>
        
                <div className="note-footer">
                alberto cajas - 10/01/2022 - 10:55
                </div>
             </div>
            
          </div>
          <div className="d-flex">
             <div className="notes-n">
            <h4>
              Copia de Cedula
            </h4>
          <div className="archive-description">
            copiadecedula132313213.PDF
          </div>
        
                <div className="note-footer">
                alberto cajas - 10/01/2022 - 10:55
                </div>
             </div>
            
          </div>
          
  </Tab>
  <Tab eventKey="Seguimiento " title="Seguimientos " >
  <div className="">Registro de Actividad con el Cliente</div>
  <div className="modal-body my-2">
            
  <div className="d-flex ">  
  <div className="form-group ">
  <select name="productos" className="select-product archive-select" > 
            <option selected value="0"> Tipo de Actividad </option>
     
       <option value="1">Visita</option> 
       <option value="2">Llamada</option> 
       <option value="3">Correo</option> 
   
</select></div>
<div className="form-group ">
                <input
                  name="Dateseg"
                  type="text"
                 placeholder="Fecha de Referencia"
                  className={`form-control `}
                />
              </div>
              <div className="txt-align-end">     
              <div className="form-group ">
                <input
                  name="Result"
                  type="text"
                 placeholder="Resultado"
                  className={`form-control `}
                />
              </div>


</div>

      </div>      
      <div className=" w-100">
                <input
                  name="Description"
                  type="text"
                 placeholder="Descripción"
                  className={`form-control w-100 `}
                />
              </div>  

              <div className="txt-align-end">
            <button
              disabled={formState.isSubmitting}
              className="btn btn-primary"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1 justify-content-end"></span>
              )}
              AGREGAR NOTA
            </button>
            </div>
                
          </div>
          <div className="d-flex">
             <div className="notes-n">
            <h4>
              Llamada
            </h4>
          <div className="archive-description">
            copiadecedula132313213.PDF
          </div>
        
                <div className="note-footer">
                alberto cajas - 10/01/2022 - 10:55
                </div>
             </div>
            
          </div>
          <div className="d-flex">
             <div className="notes-n">
            <h4>
              Visita
            </h4>
          
          <div className="archive-description">
            copiadecedula132313213.PDF
          </div>
        
                <div className="note-footer">
                alberto cajas - 10/01/2022 - 10:55
                </div>
             </div>
            
          </div>
          
  </Tab>
</Tabs>
  
    </>
  </>


  );
}