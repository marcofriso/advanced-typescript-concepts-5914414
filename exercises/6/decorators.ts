// Add decorators here

// log a message every time a method it decorates is called
function Log(
  _target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  void _target;

  const method = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName}`);

    return method.apply(this, args);
  };
}

// prevents execution unless user has a specific role
function Authorize(roleRequired: string) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
function Role(role: string) {
  return function (
    target: any,
    propertyKey: string,
    _descriptor?: PropertyDescriptor
  ) {
    void _descriptor;

    Reflect.defineMetadata("role", role, target, propertyKey);
  };
}

export { Log, Authorize, Role };
