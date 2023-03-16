const Employee = require('../models/employee.model');

const createEmployee = async (req, res) => {
  const { nif, nombre, apellido, codigo_departamento } = req.body;
  try {
    const empleado = await Employee.create({ nif, nombre, apellido, codigo_departamento });
    res.json(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al crear el empleado' });
  }
};

const getAllEmployees = async(req, res)=>{
  try {
    const empleados = await Employee.findAll();
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener empleados." });
  }
};

const getEmployeeByCode =  async(req, res)=>{
  try {
    const codigo = req.params.codigo;
    const employee = await Employee.findOne({ where: { codigo } });
    if (!employee) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    return res.status(200).json(employee);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener el empleado' });
  }
};


const updateEmployee = async (req, res, ) => {
  const codigo = req.params.codigo;
  const { nif, nombre, apellido, apellido2, codigo_departamento } = req.body;

  try {
    const employee = await Employee.findByPk(codigo);

    if (!employee) {
      return res.status(404).send({ message: `No se ha encontrado un empleado con código ${codigo}` });
    }

    await employee.update({
      nif: nif || employee.nif,
      nombre: nombre || employee.nombre,
      apellido: apellido || employee.apellido,
      apellido2: apellido2 || employee.apellido2,
      codigo_departamento: codigo_departamento || employee.codigo_departamento
    });

    return res.status(200).send({ message: `Empleado con código ${codigo} actualizado correctamente` });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Error al actualizar el empleado' });
  }
};

const deleteEmployee = async(req ,res)=>{
  const codigo = req.params.codigo;

  try {
    const employee = await Employee.findByPk(codigo);

    if (!employee) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    await employee.destroy();
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}





module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeByCode,
  updateEmployee,
  deleteEmployee
};