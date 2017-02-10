package com.qiushiyimai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Date : 2017/2/8 0008
 * Time : 上午 11:49
 * Description :
 */
@Controller
public class MainSiteController {

    @RequestMapping(value = "/index")
    public String index_main(){

        return "index";
    }

}
