package com.qiushiyimai.service;

import com.qiushiyimai.dao.NewsTypeRepository;
import com.qiushiyimai.entity.News;
import com.qiushiyimai.entity.NewsType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Date : 2017/2/8 0008
 * Time : 下午 1:35
 * Description :
 */
@Service
public class NewsTypeService {

    @Autowired
    private NewsTypeRepository newsTypeRepository;


    public void save(NewsType newsType){
        newsTypeRepository.save(newsType);
    }

    public List<NewsType> findAll() {
        return newsTypeRepository.findAll();
    }

    public NewsType findById(Long id) {
        return newsTypeRepository.findOne(id);
    }

//    public void update(NewsType newsType) {
//        newsTypeRepository.save(newsType);
//    }

    public void deleteById(long id) {
        newsTypeRepository.delete(id);
    }

    public void update(NewsType newsType) {
        newsTypeRepository.save(newsType);
    }
}
