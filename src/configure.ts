import express from "express";
import { CallbackHook, StatusHook, ServerHook, HandlerHook, ViteServerHook } from "vite-plugin-api-routes/model";

export const viteServerBefore: ViteServerHook = (server, viteServer) => {
    console.log("VITEJS SERVER");
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
};

export const viteServerAfter: ViteServerHook = (server, viteServer) => {
};

export const serverBefore: ServerHook = (server) => {
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
};

export const serverAfter: ServerHook = (server) => {
};

export const handlerBefore: HandlerHook = (handler) => {
};

export const handlerAfter: HandlerHook = (server) => {
};

export const callbackBefore: CallbackHook = (callback, route) => {
    return callback;
};

export const serverListening: StatusHook = (server) => {
};

export const serverError: StatusHook = (server, error) => {
};
