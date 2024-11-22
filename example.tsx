import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skull, Sword, Shield, Instagram, Twitter, Facebook } from 'lucide-react'

export default function WarhammerBlog() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Warhammer 40K Battle Scene"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-600">战锤40K世界</h1>
          <p className="text-xl md:text-2xl mb-8">在黑暗的未来，只有战争...</p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            探索更多
          </Button>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">最新分享</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>帝国守卫军战术分析</CardTitle>
              <CardDescription>深入了解帝国守卫军的战斗策略</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Imperial Guard Tactics"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline">阅读全文</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>太空野狼涂装指南</CardTitle>
              <CardDescription>学习如何为你的太空野狼模型上色</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Space Wolves Painting"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline">查看教程</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>战锤40K小说推荐</CardTitle>
              <CardDescription>本月必读的黑暗未来小说</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Warhammer 40K Novels"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline">浏览书单</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-800 py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">订阅战报</h2>
          <p className="mb-8">及时获取最新的战锤40K资讯、战术分析和模型展示！</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="输入你的邮箱地址"
              className="md:w-96 bg-gray-700 text-white border-gray-600"
            />
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
              订阅
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">战锤40K个人博客</h3>
            <p>&copy; 2024 版权所有</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Facebook size={24} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

