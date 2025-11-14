"use strict";
// Add decorators here
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = Log;
exports.Authorize = Authorize;
exports.Role = Role;
// log a message every time a method it decorates is called
function Log(_target, propertyName, descriptor) {
    void _target;
    const method = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyName}`);
        return method.apply(this, args);
    };
}
// prevents execution unless user has a specific role
function Authorize(roleRequired) {
    return function (target, propertyName, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            const role = Reflect.getMetadata("role", target, propertyName);
            console.log("ROLES", role, roleRequired);
            if (role !== roleRequired) {
                console.log(`Access denied for ${propertyName}`);
                return;
            }
            return method.apply(this, args);
        };
    };
}
// set up role metadata
function Role(role) {
    return function (target, propertyKey, _descriptor) {
        void _descriptor;
        Reflect.defineMetadata("role", role, target, propertyKey);
    };
}
