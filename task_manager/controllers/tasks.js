const e = require("express");
const express = require("express");
const Task = require("../models/Tasks");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task, message: "Task sucessfully created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const singleTask = await Task.findOne({ _id: taskID });
    if (!singleTask) {
      res.status(404).json({ message: `No task with id ${taskID}` });
    }
    res.status(200).json({ singleTask });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json({ message: `No task with id ${taskID}` });
    }
    res.status(200).json({ message: `Task with id ${taskID} deleted` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body);
    res.status(200).json({ message: `Task with id ${taskID} updated` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
