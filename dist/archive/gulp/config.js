"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = exports.config = {
    cwd: "./..",
    elements: {
        scripts: ["./client/+(components|elements|shared)/**/*.js"],
        markups: ["./client/+(components|elements|shared)/**/*.html", "./client/index.html"]
    },
    data: "./www/assets/data",
    api: {
        url: "api.phraseapp.com/api/v2",
        projectId: "2bb0a495c85a79d155bf38af80448e60",
        fileFormat: "nested_json",
        accessToken: "9220d73a14d176f6a687f45913a0cf64583a9b5c25b0a9436ad3c036396ffd11"
    },
    css: ["./client/+(components|elements)/**/*.css"],
    client: {
        test: {
            unit: ["./client/**/*.unit.test.js"],
            web: ["./client/**/*.web.test.js"],
            e2e: ["./client/+(components|elements|shared)/**/*.e2e.test.js", "./client/index.e2e.test.js"]
        }
    },
    server: {
        test: {
            unit: ["./server/**/*.test.js"]
        }
    },
    assets: "client/assets/**/*.*",
    libs: "client/assets/libs/**/*.{html, js}",
    fonts: "client/assets/fonts/**/*.{ttf, otf}",
    icons: "client/assets/icons/**/*.{svg}",
    images: "client/assets/images/**/*.{jpeg, jpg, png}",
    vectors: "client/assets/vectors/**/*.{svg}",
    root: "client/assets/root/**/*.*",
    src: "./client",
    dest: "./www"
};

exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FyY2hpdmUvZ3VscC9jb25maWcuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiY3dkIiwiZWxlbWVudHMiLCJzY3JpcHRzIiwibWFya3VwcyIsImRhdGEiLCJhcGkiLCJ1cmwiLCJwcm9qZWN0SWQiLCJmaWxlRm9ybWF0IiwiYWNjZXNzVG9rZW4iLCJjc3MiLCJjbGllbnQiLCJ0ZXN0IiwidW5pdCIsIndlYiIsImUyZSIsInNlcnZlciIsImFzc2V0cyIsImxpYnMiLCJmb250cyIsImljb25zIiwiaW1hZ2VzIiwidmVjdG9ycyIsInJvb3QiLCJzcmMiLCJkZXN0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLDBCQUFTO0FBQ2hCQyxlQURnQjtBQUVoQkMsY0FBVTtBQUNOQyxpQkFBUyxrREFESDtBQUlOQyxpQkFBUztBQUpILEtBRk07QUFXaEJDLDZCQVhnQjtBQVloQkMsU0FBSztBQUNEQyx1Q0FEQztBQUVEQyxxREFGQztBQUdEQyxpQ0FIQztBQUlEQztBQUpDLEtBWlc7QUFrQmhCQyxTQUFLLDRDQWxCVztBQW9CaEJDLFlBQVE7QUFDSkMsY0FBTTtBQUNGQyxrQkFBTSw4QkFESjtBQUlGQyxpQkFBSyw2QkFKSDtBQU9GQyxpQkFBSztBQVBIO0FBREYsS0FwQlE7QUFrQ2hCQyxZQUFRO0FBQ0pKLGNBQU07QUFDRkMsa0JBQU07QUFESjtBQURGLEtBbENRO0FBeUNoQkksa0NBekNnQjtBQTBDaEJDLDhDQTFDZ0I7QUEyQ2hCQyxnREEzQ2dCO0FBNENoQkMsMkNBNUNnQjtBQTZDaEJDLHdEQTdDZ0I7QUE4Q2hCQywrQ0E5Q2dCO0FBK0NoQkMscUNBL0NnQjtBQWdEaEJDLG1CQWhEZ0I7QUFpRGhCQztBQWpEZ0IsQ0FBYjs7a0JBb0RRMUIsTSIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IGNvbmZpZyA9IHtcbiAgICBjd2Q6IGAuLy4uYCxcbiAgICBlbGVtZW50czoge1xuICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICBgLi9jbGllbnQvKyhjb21wb25lbnRzfGVsZW1lbnRzfHNoYXJlZCkvKiovKi5qc2BcbiAgICAgICAgXSxcbiAgICAgICAgbWFya3VwczogW1xuICAgICAgICAgICAgYC4vY2xpZW50LysoY29tcG9uZW50c3xlbGVtZW50c3xzaGFyZWQpLyoqLyouaHRtbGAsXG4gICAgICAgICAgICBgLi9jbGllbnQvaW5kZXguaHRtbGBcbiAgICAgICAgXVxuICAgIH0sXG4gICAgZGF0YTogYC4vd3d3L2Fzc2V0cy9kYXRhYCxcbiAgICBhcGk6IHtcbiAgICAgICAgdXJsOiBgYXBpLnBocmFzZWFwcC5jb20vYXBpL3YyYCxcbiAgICAgICAgcHJvamVjdElkOiBgMmJiMGE0OTVjODVhNzlkMTU1YmYzOGFmODA0NDhlNjBgLFxuICAgICAgICBmaWxlRm9ybWF0OiBgbmVzdGVkX2pzb25gLFxuICAgICAgICBhY2Nlc3NUb2tlbjogYDkyMjBkNzNhMTRkMTc2ZjZhNjg3ZjQ1OTEzYTBjZjY0NTgzYTliNWMyNWIwYTk0MzZhZDNjMDM2Mzk2ZmZkMTFgXG4gICAgfSxcbiAgICBjc3M6IFtcbiAgICAgICAgYC4vY2xpZW50LysoY29tcG9uZW50c3xlbGVtZW50cykvKiovKi5jc3NgXSxcbiAgICBjbGllbnQ6IHtcbiAgICAgICAgdGVzdDoge1xuICAgICAgICAgICAgdW5pdDogW1xuICAgICAgICAgICAgICAgIGAuL2NsaWVudC8qKi8qLnVuaXQudGVzdC5qc2BcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3ZWI6IFtcbiAgICAgICAgICAgICAgICBgLi9jbGllbnQvKiovKi53ZWIudGVzdC5qc2BcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBlMmU6IFtcbiAgICAgICAgICAgICAgICBgLi9jbGllbnQvKyhjb21wb25lbnRzfGVsZW1lbnRzfHNoYXJlZCkvKiovKi5lMmUudGVzdC5qc2AsXG4gICAgICAgICAgICAgICAgYC4vY2xpZW50L2luZGV4LmUyZS50ZXN0LmpzYFxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgdGVzdDoge1xuICAgICAgICAgICAgdW5pdDogW1xuICAgICAgICAgICAgICAgIGAuL3NlcnZlci8qKi8qLnRlc3QuanNgXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFzc2V0czogYGNsaWVudC9hc3NldHMvKiovKi4qYCxcbiAgICBsaWJzOiBgY2xpZW50L2Fzc2V0cy9saWJzLyoqLyoue2h0bWwsIGpzfWAsXG4gICAgZm9udHM6IGBjbGllbnQvYXNzZXRzL2ZvbnRzLyoqLyoue3R0Ziwgb3RmfWAsXG4gICAgaWNvbnM6IGBjbGllbnQvYXNzZXRzL2ljb25zLyoqLyoue3N2Z31gLFxuICAgIGltYWdlczogYGNsaWVudC9hc3NldHMvaW1hZ2VzLyoqLyoue2pwZWcsIGpwZywgcG5nfWAsXG4gICAgdmVjdG9yczogYGNsaWVudC9hc3NldHMvdmVjdG9ycy8qKi8qLntzdmd9YCxcbiAgICByb290OiBgY2xpZW50L2Fzc2V0cy9yb290LyoqLyouKmAsXG4gICAgc3JjOiBgLi9jbGllbnRgLFxuICAgIGRlc3Q6IGAuL3d3d2Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdfQ==