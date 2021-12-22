"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var Service_1 = require("../../services/Service");
require("./Login.css");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../store/tokens/actions");
var react_toastify_1 = require("react-toastify");
function Login() {
    var history = react_router_dom_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];
    var _b = react_1.useState({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    }), userLogin = _b[0], setUserLogin = _b[1];
    function updatedModel(e) {
        var _a;
        setUserLogin(__assign(__assign({}, userLogin), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    }
    react_1.useEffect(function () {
        if (token != '') {
            dispatch(actions_1.addToken(token));
            history.push('/home');
        }
    }, [token]);
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Service_1.login("/usuarios/logar", userLogin, setToken)];
                    case 2:
                        _a.sent();
                        react_toastify_1.toast.success('Usuário logado com sucesso!', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            theme: "colored",
                            progress: undefined
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        react_toastify_1.toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            theme: "colored",
                            progress: undefined
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(core_1.Grid, { container: true, direction: 'row', justifyContent: 'center', alignItems: 'center' },
        react_1["default"].createElement(core_1.Grid, { alignItems: 'center', xs: 6 },
            react_1["default"].createElement(core_1.Box, { paddingX: 20 },
                react_1["default"].createElement("form", { onSubmit: onSubmit },
                    react_1["default"].createElement(core_1.Typography, { variant: 'h3', gutterBottom: true, color: 'textPrimary', component: 'h3', align: 'center', className: 'textos1' }, "Entrar"),
                    react_1["default"].createElement(core_1.TextField, { value: userLogin.usuario, onChange: function (e) { return updatedModel(e); }, id: 'usuario', label: 'usu\u00E1rio', variant: 'outlined', name: 'usuario', margin: 'normal', fullWidth: true }),
                    react_1["default"].createElement(core_1.TextField, { value: userLogin.senha, onChange: function (e) { return updatedModel(e); }, id: 'senha', label: 'senha', variant: 'outlined', name: 'senha', margin: 'normal', type: 'password', fullWidth: true }),
                    react_1["default"].createElement(core_1.Box, { marginTop: 2, textAlign: 'center' },
                        react_1["default"].createElement(core_1.Button, { type: 'submit', variant: 'contained', color: 'primary' }, "Logar"))),
                react_1["default"].createElement(core_1.Box, { display: 'flex', justifyContent: 'center', marginTop: 2 },
                    react_1["default"].createElement(core_1.Box, { marginRight: 1 },
                        react_1["default"].createElement(core_1.Typography, { variant: 'subtitle1', gutterBottom: true, align: 'center' }, "N\u00E3o tem uma conta?")),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/cadastrousuario' },
                        react_1["default"].createElement(core_1.Typography, { variant: 'subtitle1', gutterBottom: true, align: 'center', className: 'textos1' }, "Cadastre-se"))))),
        react_1["default"].createElement(core_1.Grid, { xs: 6, className: 'imagem' })));
}
exports["default"] = Login;
