import React, {useContext} from "react";

import { View, ActivityIndicator } from "react-native";

// Routes
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

// Contexts
import { AuthContext } from "../contexts/AuthContext";


function Routes() {
    const { isAuthenticated, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#1d1d23',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator  size={60} color="#fff"/>
            </View>
        )
    }

    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;

