const express = require("express");

const getAllTask = (req, res) => {
  res.send("all items from controller");
};

const createTask = (req, res) => {
  res.send("create task");
};

const getTask = (req, res) => {
    res.send("get single task");
}

const deleteTask = (req, res) => {
  res.send("delete task");
};

const updateTask = (req, res) => {
  res.send("edit task");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
