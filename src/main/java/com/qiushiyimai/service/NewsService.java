package com.qiushiyimai.service;

import com.qiushiyimai.dao.NewsRepository;
import com.qiushiyimai.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Date : 2017/2/8 0008
 * Time : 下午 1:29
 * Description :
 */

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public void save(News news){
        news.setCreateDate(new Date());
        newsRepository.save(news);
    }

    public List<News> findAll() {
        return newsRepository.findAll();
    }

    public Object findById(long id) {
        return newsRepository.findOne(id);
    }

    public void deleteById(long id) {
        newsRepository.delete(id);
    }

    public void update(News news) {
        newsRepository.save(news);
    }

    public List<News> findByTypeId(long id){
        if(id == 00) {
            return newsRepository.findAll();
        }
        return newsRepository.findAll(new Specification<News>() {
            @Override
            public Predicate toPredicate(Root<News> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<Predicate>();
                Predicate p1 = criteriaBuilder.equal(root.join("newsType").get("id").as(Long.class), id);
                list.add(criteriaBuilder.and(p1));
                Predicate[] p = new Predicate[list.size()];
                return criteriaBuilder.and(list.toArray(p));
            }
        });
    }
}
