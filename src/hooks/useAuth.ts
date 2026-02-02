import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
    return useContext(AuthContext);
}

/* 

SEM useauth

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const { user, logout } = useContext(AuthContext);

COM useauth

import { useAuth } from "../hooks/useAuth";

const { user, logout } = useAuth();

*/