const express = require("express");
const Task = require("../models/Tasks");

const getAllTask = (req, res) => {
  res.send("all items from controller");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task, message: "Task sucessfully created" });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

const updateTask = (req, res) => {
  res.send("update task");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
