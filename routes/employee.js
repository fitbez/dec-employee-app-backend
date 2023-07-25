const router = require("express").Router();
const Employee = require("../models/employee");

//CREATE AN EMPLOYEE
router.post("/employee", async (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    occupation: req.body.occupation,
    imageUrl: req.body.imageUrl,
    callMobile: req.body.callMobile,
    callOffice: req.body.callOffice,
    sms: req.body.sms,
    email: req.body.email,
  });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
