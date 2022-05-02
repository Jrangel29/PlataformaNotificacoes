import React from "react";
import { Button, Dropdown } from "react-bootstrap";

function NotificationTimeSelection(props) {
  return (
    <>
      {props.parametros.tipologia === "Informação" &&
      props.parametros.categoriaInfo === "Bom Dia" ? (
        <div className="row m-0 mt-3">
          <h1 className="tituloSeccaoPagina">Envio de notificação</h1>
          <p className="subtituloSeccaoPagina">
            Tipo de notificação <span className="obrigatorio">*</span>
          </p>
          <span className="col-2">
            <Dropdown>
              <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                {props.parametros.envioNotif.tipoNotif}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdownFiltro">
                <Dropdown.Item
                  onClick={() => props.alterarEnvio("Envio Único")}
                >
                  Envio Único
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.alterarEnvio("Rotina")}>
                  Rotina
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
          {props.parametros.envioNotif.tipoNotif === "Envio Único" ? (
            <></>
          ) : (
            <span className="col-12 mt-3">
              <p className="subtituloSeccaoPagina mt-3">Dias da semana</p>
              <span className="row m-0 justify-content-center">
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.segunda === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("segunda")}
                  >
                    Segunda-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.terca === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("terca")}
                  >
                    Terça-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quarta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quarta")}
                  >
                    Quarta-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quinta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quinta")}
                  >
                    Quinta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sexta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sexta")}
                  >
                    Sexta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sabado === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sabado")}
                  >
                    Sábado
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.domingo === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("domingo")}
                  >
                    Domingo
                  </Button>
                </span>
              </span>
            </span>
          )}
          <p className="subtituloSeccaoPagina mt-2">Momento de envio</p>
          <span className="col-2">
            <Dropdown>
              <Dropdown.Toggle
                disabled
                variant="custom"
                className="dropdownFiltro"
              >
                Ao ligar a STB
              </Dropdown.Toggle>
            </Dropdown>
          </span>
        </div>
      ) : props.parametros.tipologia === "Conteúdo" ? (
        <div className="row m-0 mt-3">
          <h1 className="tituloSeccaoPagina">Envio de notificação</h1>
          <p className="subtituloSeccaoPagina">Tipo de notificação</p>
          <span className="col-2">
            <Dropdown>
              <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                {props.parametros.envioNotif.tipoNotif}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdownFiltro">
                <Dropdown.Item
                  onClick={() => props.alterarEnvio("Envio Único")}
                >
                  Envio Único
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.alterarEnvio("Rotina")}>
                  Rotina
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
          {props.parametros.envioNotif.tipoNotif === "Envio Único" ? (
            <></>
          ) : (
            <span className="col-12 mt-3">
              <p className="subtituloSeccaoPagina mt-3">Dias da semana</p>
              <span className="row m-0 justify-content-center">
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.segunda === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("segunda")}
                  >
                    Segunda-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.terca === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("terca")}
                  >
                    Terça-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quarta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quarta")}
                  >
                    Quarta-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quinta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quinta")}
                  >
                    Quinta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sexta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sexta")}
                  >
                    Sexta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sabado === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sabado")}
                  >
                    Sábado
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.domingo === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("domingo")}
                  >
                    Domingo
                  </Button>
                </span>
              </span>
            </span>
          )}
          <p className="subtituloSeccaoPagina mt-2">Horas</p>
          <span className="col-2">
            <input type="time" className='inputsForms without_ampm w-50' style={{height: "37px"}}/>
          </span>
        </div>
      ) : props.parametros.tipologia === "Agenda" ? (
        <div className="row m-0 mt-3">
          <h1 className="tituloSeccaoPagina">Envio de notificação</h1>
          <p className="subtituloSeccaoPagina">Tipo de notificação</p>
          <span className="col-2 me-3">
            <Dropdown>
              <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                {props.parametros.envioNotif.tipoNotif}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdownFiltro">
                <Dropdown.Item
                  onClick={() => props.alterarEnvio("Envio Único")}
                >
                  Envio Único
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.alterarEnvio("Rotina", "Semanal")}>
                  Rotina
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
          {props.parametros.envioNotif.tipoNotif === "Rotina" ? (
            <span className="col-2">
              <Dropdown>
                <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                  {props.parametros.envioNotif.periodicidade}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownFiltro">
                  <Dropdown.Item
                    onClick={() => props.alterarEnvio("Rotina", "Semanal")}
                  >
                    Semanal
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => props.alterarEnvio("Rotina", "Mensal")}
                  >
                    Mensal
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          ) : (
            <></>
          )}
          {props.parametros.envioNotif.tipoNotif === "Envio Único" ? (
            <></>
          ) : props.parametros.envioNotif.tipoNotif === "Rotina" &&
            props.parametros.envioNotif.periodicidade === "Semanal" ? (
            <span className="col-12 mt-3">
              <p className="subtituloSeccaoPagina mt-3">Dias da semana</p>
              <span className="row m-0 justify-content-center">
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.segunda === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("segunda")}
                  >
                    Segunda-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.terca === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("terca")}
                  >
                    Terça-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quarta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quarta")}
                  >
                    Quarta-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quinta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quinta")}
                  >
                    Quinta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sexta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sexta")}
                  >
                    Sexta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sabado === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sabado")}
                  >
                    Sábado
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.domingo === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("domingo")}
                  >
                    Domingo
                  </Button>
                </span>
              </span>
            </span>
          ) : (
            <>
              <p className="subtituloSeccaoPagina mt-2">Dia do mês</p>
              <span className="col-2">
                <Dropdown>
                  <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                    Dia do mês
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdownFiltro">
                  <Dropdown.Item variant="flat" className="dropdownFiltro">1</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">2</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">2</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">3</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">4</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">5</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">6</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">7</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">8</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">9</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">10</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">11</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">12</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">13</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">14</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">15</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">16</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">17</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">18</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">19</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">20</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">21</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">22</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">23</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">24</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">25</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">26</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">27</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">28</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">29</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">30</Dropdown.Item>
                  <Dropdown.Item variant="flat" className="dropdownFiltro">31</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </>
          )}
          <p className="subtituloSeccaoPagina mt-2">Horas</p>
          <span className="col-2">
            <input type="time" className='inputsForms without_ampm w-50' style={{height: "37px"}}/>
          </span>
        </div>
      ) : props.parametros.tipologia === "Serviços" ? (
        <div className="row m-0 mt-3">
          <h1 className="tituloSeccaoPagina">Envio de notificação</h1>
          <p className="subtituloSeccaoPagina">Tipo de notificação</p>
          <span className="col-2">
            <Dropdown>
              <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                {props.parametros.envioNotif.tipoNotif}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdownFiltro">
                <Dropdown.Item
                  onClick={() => props.alterarEnvio("Envio Único")}
                >
                  Envio Único
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.alterarEnvio("Rotina")}>
                  Rotina
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
          {props.parametros.envioNotif.tipoNotif === "Envio Único" ? (
            <div className="row m-0">
              <span className="col-3 m-0 me-3">
                <p className="subtituloSeccaoPagina mt-2">Dia da semana</p>
                <span>
                  <Dropdown>
                    <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                      Quarta-Feira
                    </Dropdown.Toggle>
                  </Dropdown>
                </span>
              </span>
              <span className="col-2 m-0">
                <p className="subtituloSeccaoPagina mt-2">Horas</p>
                <span>
                  <input type="time" className='inputsForms without_ampm w-50' style={{height: "37px"}}/>
                </span>
              </span>
            </div>
          ) : (
            <span className="col-12 mt-3">
              <p className="subtituloSeccaoPagina mt-3">Dias da semana</p>
              <span className="row m-0 justify-content-center">
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.segunda === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("segunda")}
                  >
                    Segunda-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.terca === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("terca")}
                  >
                    Terça-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quarta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quarta")}
                  >
                    Quarta-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quinta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quinta")}
                  >
                    Quinta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sexta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sexta")}
                  >
                    Sexta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sabado === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sabado")}
                  >
                    Sábado
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.domingo === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("domingo")}
                  >
                    Domingo
                  </Button>
                </span>
              </span>
            </span>
          )}
        </div>
      ) : props.parametros.tipologia === "Saúde" ? (
        <div className="row m-0 mt-3">
          <h1 className="tituloSeccaoPagina">Envio de notificação</h1>
          <p className="subtituloSeccaoPagina">Tipo de notificação</p>
          {props.parametros.categoriaInfo === "Genérica" &&
          props.parametros.terceiraCategoriaSaude === "Inatividade" ? (
            <>
              <span className="col-2">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="custom"
                    disabled
                    className="dropdownFiltro"
                  >
                    Envio Regular
                  </Dropdown.Toggle>
                </Dropdown>
              </span>
              <div className="row m-0">
                <span className="col-3 m-0 me-3">
                  <p className="subtituloSeccaoPagina mt-2">
                    Razão de envio
                  </p>
                  <span>
                    <Dropdown>
                      <Dropdown.Toggle
                        disabled
                        variant="custom"
                        className="dropdownFiltro"
                      >
                        Inatividade
                      </Dropdown.Toggle>
                    </Dropdown>
                  </span>
                </span>
                <span className="col-3 m-0">
                  <p className="subtituloSeccaoPagina mt-2">
                    Tempo no mesmo canal
                  </p>
                  <span>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="flat"
                        className="dropdownFiltro"
                      >
                        2 horas
                      </Dropdown.Toggle>
                    </Dropdown>
                  </span>
                </span>
              </div>
            </>
          ) : props.parametros.categoriaInfo === "Genérica" &&
            props.parametros.terceiraCategoriaSaude ===
              "Ingestão de Líquidos" ? (
            <>
              <span className="col-2">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="custom"
                    disabled
                    className="dropdownFiltro"
                  >
                    Envio Regular
                  </Dropdown.Toggle>
                </Dropdown>
              </span>
              <div className="row m-0">
                <span className="col-3 m-0 me-3">
                  <p className="subtituloSeccaoPagina mt-2">
                    Razão de envio
                  </p>
                  <span>
                    <Dropdown>
                      <Dropdown.Toggle
                        disabled
                        variant="custom"
                        className="dropdownFiltro"
                      >
                        Ingestão de Líquidos
                      </Dropdown.Toggle>
                    </Dropdown>
                  </span>
                </span>
                <span className="col-4 m-0">
                  <p className="subtituloSeccaoPagina mt-2">
                    Intervalo de tempo entre envios
                  </p>
                  <span>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="flat"
                        className="dropdownFiltro w-75"
                      >
                        2 horas
                      </Dropdown.Toggle>
                    </Dropdown>
                  </span>
                </span>
              </div>
            </>
          ) : (
            <>
              <span className="col-2 me-3">
                <Dropdown>
                  <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                    {props.parametros.envioNotif.tipoNotif}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdownFiltro">
                    <Dropdown.Item
                      onClick={() => props.alterarEnvio("Envio Único")}
                    >
                      Envio Único
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => props.alterarEnvio("Rotina")}>
                      Rotina
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </>
          )}
          {props.parametros.categoriaInfo === "Personalizada" &&
          props.parametros.envioNotif.tipoNotif === "Envio Único" ? (
            <div className="row m-0">
              <span className="col-3 m-0 me-3">
                <p className="subtituloSeccaoPagina mt-2">Dia da semana</p>
                <span>
                  <Dropdown>
                    <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                      Quarta-Feira
                    </Dropdown.Toggle>
                  </Dropdown>
                </span>
              </span>
              <span className="col-2 m-0">
                <p className="subtituloSeccaoPagina mt-2">Horas</p>
                <span>
                  <input type="time" className='inputsForms without_ampm w-50' style={{height: "37px"}}/>
                </span>
              </span>
            </div>
          ) : (
            <>
              <span className="col-12 mt-3">
                <p className="subtituloSeccaoPagina">Dias da semana</p>
                <span className="row m-0 justify-content-center">
                  <span className="col-3">
                    <Button
                      className="w-100"
                      variant={
                        props.parametros.dias.segunda === false ? "flat2" : "flat3"
                      }
                      onClick={() => props.mudaDia("segunda")}
                    >
                      Segunda-Feira
                    </Button>
                  </span>
                  <span className="col-3">
                    <Button
                      className="w-100"
                      variant={
                        props.parametros.dias.terca === false ? "flat2" : "flat3"
                      }
                      onClick={() => props.mudaDia("terca")}
                    >
                      Terça-Feira
                    </Button>
                  </span>
                  <span className="col-3">
                    <Button
                      className="w-100"
                      variant={
                        props.parametros.dias.quarta === false ? "flat2" : "flat3"
                      }
                      onClick={() => props.mudaDia("quarta")}
                    >
                      Quarta-Feira
                    </Button>
                  </span>
                  <span className="col-3">
                    <Button
                      className="w-100"
                      variant={
                        props.parametros.dias.quinta === false ? "flat2" : "flat3"
                      }
                      onClick={() => props.mudaDia("quinta")}
                    >
                      Quinta-Feira
                    </Button>
                  </span>
                  <span className="col-3 my-2">
                    <Button
                      className="w-100"
                      variant={
                        props.parametros.dias.sexta === false ? "flat2" : "flat3"
                      }
                      onClick={() => props.mudaDia("sexta")}
                    >
                      Sexta-Feira
                    </Button>
                  </span>
                  <span className="col-3 my-2">
                    <Button
                      className="w-100"
                      variant={
                        props.parametros.dias.sabado === false ? "flat2" : "flat3"
                      }
                      onClick={() => props.mudaDia("sabado")}
                    >
                      Sábado
                    </Button>
                  </span>
                  <span className="col-3 my-2">
                    <Button
                      className="w-100"
                      variant={
                        props.parametros.dias.domingo === false ? "flat2" : "flat3"
                      }
                      onClick={() => props.mudaDia("domingo")}
                    >
                      Domingo
                    </Button>
                  </span>
                </span>
              </span>
              <p className="subtituloSeccaoPagina mt-2">Horas</p>
              <span className="col-2">
                <input type="time" className='inputsForms without_ampm w-50' style={{height: "37px"}}/>
              </span>
            </>
          )}
        </div>
      ) : (
        <div className="row m-0 mt-3">
          <h1 className="tituloSeccaoPagina">Envio de notificação</h1>
          <p className="subtituloSeccaoPagina">
            Tipo de notificação <span className="obrigatorio">*</span>
          </p>
          <span className="col-2">
            <Dropdown>
              <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                {props.parametros.envioNotif.tipoNotif}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdownFiltro">
                <Dropdown.Item
                  onClick={() => props.alterarEnvio("Envio Único")}
                >
                  Envio Único
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.alterarEnvio("Rotina")}>
                  Rotina
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
          {props.parametros.envioNotif.tipoNotif === "Envio Único" ? (
            <>
              <p className='subtituloSeccaoPagina mt-2'>Momento de Envio <span className="obrigatorio">*</span></p>
              <span className='col-3'>
                <Dropdown>
                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                        {props.parametros.paramsPersonalizado.momentoEnvio}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdownFiltro'>
                        <Dropdown.Item onClick={() => props.mudaMomento("Agora")}>Agora</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.mudaMomento("Hora Específica")}>Hora específica</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.mudaMomento("Dia e Hora específicos")}>Dia e Hora específicos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </span>
          </>
          ) : (
            <span className="col-12 mt-3">
              <p className="subtituloSeccaoPagina mt-3">Dias da semana</p>
              <span className="row m-0 justify-content-center">
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.segunda === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("segunda")}
                  >
                    Segunda-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.terca === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("terca")}
                  >
                    Terça-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quarta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quarta")}
                  >
                    Quarta-Feira
                  </Button>
                </span>
                <span className="col-3">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.quinta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("quinta")}
                  >
                    Quinta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sexta === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sexta")}
                  >
                    Sexta-Feira
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.sabado === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("sabado")}
                  >
                    Sábado
                  </Button>
                </span>
                <span className="col-3 my-2">
                  <Button
                    className="w-100"
                    variant={
                      props.parametros.dias.domingo === false ? "flat2" : "flat3"
                    }
                    onClick={() => props.mudaDia("domingo")}
                  >
                    Domingo
                  </Button>
                </span>
              </span>
            </span>
          )}
          {props.parametros.paramsPersonalizado.momentoEnvio === "Hora Específica" ?
          <div className="row m-0 mt-2">
            <span className="col-2 m-0">
              <p className="subtituloSeccaoPagina mx-0">Horas <span className="obrigatorio">*</span></p>
              <span>
                <input type="time" className='inputsForms without_ampm w-50' style={{height: "37px"}}/>
              </span>
            </span>
          </div>
          :
          props.parametros.paramsPersonalizado.momentoEnvio === "Dia e Hora específicos" ?
          <div className="row m-0 mt-2">
          <span className="col-2 m-0 me-2">
            <p className="subtituloSeccaoPagina">Horas <span className="obrigatorio">*</span></p>
            <span>
              <input type="time" className='inputsForms without_ampm w-50' style={{height: "37px"}}/>
            </span>
          </span>
          <span className="col-3 m-0">
            <p className="subtituloSeccaoPagina">Dia da semana <span className="obrigatorio">*</span></p>
            <span>
              <Dropdown>
                <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                  20:30
                </Dropdown.Toggle>
              </Dropdown>
            </span>
          </span>
          </div>
          :
          <></>
          }
        </div>
      )}
    </>
  );
}

export default NotificationTimeSelection;
