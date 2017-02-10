package com.qiushiyimai.config.security;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix="securityConfig")
public class SecuritySettings {
    private String logoutSuccessUrl = "/logout";
    private String permitAll = "/api";
    private String deniedPage = "/deny";
    private String urlRoles;

    public String getLogoutSuccessUrl() {
        return logoutSuccessUrl;
    }

    public void setLogoutSuccessUrl(String logoutSuccessUrl) {
        this.logoutSuccessUrl = logoutSuccessUrl;
    }

    public String getPermitAll() {
        return permitAll;
    }

    public void setPermitAll(String permitAll) {
        this.permitAll = permitAll;
    }

    public String getDeniedPage() {
        return deniedPage;
    }

    public void setDeniedPage(String deniedPage) {
        this.deniedPage = deniedPage;
    }

    public String getUrlRoles() {
        return urlRoles;
    }

    public void setUrlRoles(String urlRoles) {
        this.urlRoles = urlRoles;
    }
}
