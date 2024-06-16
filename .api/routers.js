
// Imports
import * as _0_0 from "@api/root/src/api/v1/agents/index.ts";
import * as _0_1 from "@api/root/src/api/v1/agents/[id].ts";
import * as _0_2 from "@api/root/src/api/v1/auth/index.ts";
import * as _0_3 from "@api/root/src/api/v1/backups/index.ts";
import * as _0_4 from "@api/root/src/api/v1/cases/index.ts";
import * as configure from "@api/configure";

export const routeBase = "/api";

const internal  = [
  _0_0.default && {
        source     : "src/api/v1/agents/index.ts?fn=default",
        method     : "use",
        route      : "/agents/",
        path       : "/api/agents/",
        url        : "/api/agents/",
        cb         : _0_0.default,
      },
  _0_0.GET && {
        source     : "src/api/v1/agents/index.ts?fn=GET",
        method     : "get",
        route      : "/agents/",
        path       : "/api/agents/",
        url        : "/api/agents/",
        cb         : _0_0.GET,
      },
  _0_0.PUT && {
        source     : "src/api/v1/agents/index.ts?fn=PUT",
        method     : "put",
        route      : "/agents/",
        path       : "/api/agents/",
        url        : "/api/agents/",
        cb         : _0_0.PUT,
      },
  _0_0.POST && {
        source     : "src/api/v1/agents/index.ts?fn=POST",
        method     : "post",
        route      : "/agents/",
        path       : "/api/agents/",
        url        : "/api/agents/",
        cb         : _0_0.POST,
      },
  _0_0.PATCH && {
        source     : "src/api/v1/agents/index.ts?fn=PATCH",
        method     : "patch",
        route      : "/agents/",
        path       : "/api/agents/",
        url        : "/api/agents/",
        cb         : _0_0.PATCH,
      },
  _0_0.DELETE && {
        source     : "src/api/v1/agents/index.ts?fn=DELETE",
        method     : "delete",
        route      : "/agents/",
        path       : "/api/agents/",
        url        : "/api/agents/",
        cb         : _0_0.DELETE,
      },
  _0_1.default && {
        source     : "src/api/v1/agents/[id].ts?fn=default",
        method     : "use",
        route      : "/agents/:id",
        path       : "/api/agents/:id",
        url        : "/api/agents/:id",
        cb         : _0_1.default,
      },
  _0_1.GET && {
        source     : "src/api/v1/agents/[id].ts?fn=GET",
        method     : "get",
        route      : "/agents/:id",
        path       : "/api/agents/:id",
        url        : "/api/agents/:id",
        cb         : _0_1.GET,
      },
  _0_1.PUT && {
        source     : "src/api/v1/agents/[id].ts?fn=PUT",
        method     : "put",
        route      : "/agents/:id",
        path       : "/api/agents/:id",
        url        : "/api/agents/:id",
        cb         : _0_1.PUT,
      },
  _0_1.POST && {
        source     : "src/api/v1/agents/[id].ts?fn=POST",
        method     : "post",
        route      : "/agents/:id",
        path       : "/api/agents/:id",
        url        : "/api/agents/:id",
        cb         : _0_1.POST,
      },
  _0_1.PATCH && {
        source     : "src/api/v1/agents/[id].ts?fn=PATCH",
        method     : "patch",
        route      : "/agents/:id",
        path       : "/api/agents/:id",
        url        : "/api/agents/:id",
        cb         : _0_1.PATCH,
      },
  _0_1.DELETE && {
        source     : "src/api/v1/agents/[id].ts?fn=DELETE",
        method     : "delete",
        route      : "/agents/:id",
        path       : "/api/agents/:id",
        url        : "/api/agents/:id",
        cb         : _0_1.DELETE,
      },
  _0_2.default && {
        source     : "src/api/v1/auth/index.ts?fn=default",
        method     : "use",
        route      : "/auth/",
        path       : "/api/auth/",
        url        : "/api/auth/",
        cb         : _0_2.default,
      },
  _0_2.GET && {
        source     : "src/api/v1/auth/index.ts?fn=GET",
        method     : "get",
        route      : "/auth/",
        path       : "/api/auth/",
        url        : "/api/auth/",
        cb         : _0_2.GET,
      },
  _0_2.PUT && {
        source     : "src/api/v1/auth/index.ts?fn=PUT",
        method     : "put",
        route      : "/auth/",
        path       : "/api/auth/",
        url        : "/api/auth/",
        cb         : _0_2.PUT,
      },
  _0_2.POST && {
        source     : "src/api/v1/auth/index.ts?fn=POST",
        method     : "post",
        route      : "/auth/",
        path       : "/api/auth/",
        url        : "/api/auth/",
        cb         : _0_2.POST,
      },
  _0_2.PATCH && {
        source     : "src/api/v1/auth/index.ts?fn=PATCH",
        method     : "patch",
        route      : "/auth/",
        path       : "/api/auth/",
        url        : "/api/auth/",
        cb         : _0_2.PATCH,
      },
  _0_2.DELETE && {
        source     : "src/api/v1/auth/index.ts?fn=DELETE",
        method     : "delete",
        route      : "/auth/",
        path       : "/api/auth/",
        url        : "/api/auth/",
        cb         : _0_2.DELETE,
      },
  _0_3.default && {
        source     : "src/api/v1/backups/index.ts?fn=default",
        method     : "use",
        route      : "/backups/",
        path       : "/api/backups/",
        url        : "/api/backups/",
        cb         : _0_3.default,
      },
  _0_3.GET && {
        source     : "src/api/v1/backups/index.ts?fn=GET",
        method     : "get",
        route      : "/backups/",
        path       : "/api/backups/",
        url        : "/api/backups/",
        cb         : _0_3.GET,
      },
  _0_3.PUT && {
        source     : "src/api/v1/backups/index.ts?fn=PUT",
        method     : "put",
        route      : "/backups/",
        path       : "/api/backups/",
        url        : "/api/backups/",
        cb         : _0_3.PUT,
      },
  _0_3.POST && {
        source     : "src/api/v1/backups/index.ts?fn=POST",
        method     : "post",
        route      : "/backups/",
        path       : "/api/backups/",
        url        : "/api/backups/",
        cb         : _0_3.POST,
      },
  _0_3.PATCH && {
        source     : "src/api/v1/backups/index.ts?fn=PATCH",
        method     : "patch",
        route      : "/backups/",
        path       : "/api/backups/",
        url        : "/api/backups/",
        cb         : _0_3.PATCH,
      },
  _0_3.DELETE && {
        source     : "src/api/v1/backups/index.ts?fn=DELETE",
        method     : "delete",
        route      : "/backups/",
        path       : "/api/backups/",
        url        : "/api/backups/",
        cb         : _0_3.DELETE,
      },
  _0_4.default && {
        source     : "src/api/v1/cases/index.ts?fn=default",
        method     : "use",
        route      : "/cases/",
        path       : "/api/cases/",
        url        : "/api/cases/",
        cb         : _0_4.default,
      },
  _0_4.GET && {
        source     : "src/api/v1/cases/index.ts?fn=GET",
        method     : "get",
        route      : "/cases/",
        path       : "/api/cases/",
        url        : "/api/cases/",
        cb         : _0_4.GET,
      },
  _0_4.PUT && {
        source     : "src/api/v1/cases/index.ts?fn=PUT",
        method     : "put",
        route      : "/cases/",
        path       : "/api/cases/",
        url        : "/api/cases/",
        cb         : _0_4.PUT,
      },
  _0_4.POST && {
        source     : "src/api/v1/cases/index.ts?fn=POST",
        method     : "post",
        route      : "/cases/",
        path       : "/api/cases/",
        url        : "/api/cases/",
        cb         : _0_4.POST,
      },
  _0_4.PATCH && {
        source     : "src/api/v1/cases/index.ts?fn=PATCH",
        method     : "patch",
        route      : "/cases/",
        path       : "/api/cases/",
        url        : "/api/cases/",
        cb         : _0_4.PATCH,
      },
  _0_4.DELETE && {
        source     : "src/api/v1/cases/index.ts?fn=DELETE",
        method     : "delete",
        route      : "/cases/",
        path       : "/api/cases/",
        url        : "/api/cases/",
        cb         : _0_4.DELETE,
      }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, path, route, url, source } = it;
  return { method, url, path, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};

