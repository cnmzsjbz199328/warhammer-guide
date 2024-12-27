import React, { useState, useEffect } from 'react';
import { Calendar, Eye, ChevronRight } from 'lucide-react';
import { supabase } from './lib/supabase';

// 更新类型定义以匹配数据库结构
interface Article {
  id: number;
  title: string;
  content: string;
  category: string;
  cover_image: string | null;
  summary: string | null;
  views: number;
  created_at: string;
  updated_at: string;
}

// 添加默认图片常量
const DEFAULT_COVER_IMAGE = '/images/default-cover.jpg';  // 你需要添加一个默认封面图

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // 预定义分类（因为数据库中是直接存储的分类名）
  const categories = [
    { id: 'all', name: '全部' },
    { id: '帝国攻略', name: '帝国攻略' },
    { id: '鼠人战术', name: '鼠人战术' },
    { id: '混沌入门', name: '混沌入门' },
    { id: '通用教程', name: '通用教程' }
  ];

  // 获取文章数据
  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      let query = supabase
        .from('articles')
        .select(`
          id,
          title,
          content,
          category,
          cover_image,
          summary,
          views,
          created_at,
          updated_at
        `)
        .order('created_at', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching articles:', error);
        return;
      }

      setArticles(data || []);
      setLoading(false);
    }

    fetchArticles();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部横幅 */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">战锤攻略站</h1>
          <p className="text-gray-300">分享最实用的战锤游戏攻略和战术分析</p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-8">
        {/* 分类导航 */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 文章列表 */}
        <div className="space-y-8">
          {loading ? (
            <div className="text-center py-8">加载中...</div>
          ) : articles.length === 0 ? (
            <div className="text-center py-8">暂无文章</div>
          ) : (
            articles.map(article => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={article.cover_image || DEFAULT_COVER_IMAGE}
                      alt={article.title}
                      className="h-48 w-full object-cover md:h-full"
                      onError={(e) => {
                        // 图片加载失败时使用默认图片
                        const target = e.target as HTMLImageElement;
                        target.src = DEFAULT_COVER_IMAGE;
                      }}
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(article.created_at).toLocaleDateString()}</span>
                      <Eye size={16} className="ml-4 mr-2" />
                      <span>{article.views.toLocaleString()} 次浏览</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 hover:text-gray-600">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {article.summary || article.content.slice(0, 100) + '...'}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {article.category}
                      </span>
                      <button className="text-gray-500 hover:text-gray-800 flex items-center">
                        阅读更多 <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;