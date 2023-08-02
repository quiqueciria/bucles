type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// APARTADO 5

const totalPacientesAsignadosPorEspecialidad = (
  pacientes: Pacientes[],
  especialidad: Especialidad
): number => {
  let totalPacientes = 0;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === especialidad) {
      totalPacientes++;
    }
  }
  return totalPacientes;
};

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return {
    medicoDeFamilia: totalPacientesAsignadosPorEspecialidad(
      pacientes,
      "Medico de familia"
    ),
    pediatria: totalPacientesAsignadosPorEspecialidad(pacientes, "Pediatra"),
    cardiologia: totalPacientesAsignadosPorEspecialidad(
      pacientes,
      "Cardiólogo"
    ),
  };
};

console.log(cuentaPacientesPorEspecialidad(pacientes));

// APARTADO 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatraACasa = true;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pediatraACasa = false;
    }
  }
  return pediatraACasa;
};

console.log(
  "Se puede ir el Pediatra a casa: ",
  HayPacientesDePediatria(pacientes)
);

//APARTADO 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesAMedicoDeFamilia: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }
  }
  return pacientesAMedicoDeFamilia;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(pacientes);

// APARTADO 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
    }
  }
  return activarProctolo;
};

console.log(
  "Ritmo cardiaco superior a 100: ",
  activarProtocoloUrgencia(pacientes)
);

// APARTADO 1

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesAsignadosAPediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesAsignadosAPediatria.push(pacientes[i]);
    }
  }
  return pacientesAsignadosAPediatria;
};

console.log(
  "Pacientes asignados a pediatría y menores de 10 años: ",
  obtenPacientesAsignadosAPediatria(pacientes)
);
